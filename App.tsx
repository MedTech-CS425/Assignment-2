import { hot } from 'react-hot-loader/root'
import React, { useCallback, useEffect, useState } from 'react'
import { Switch, useHistory, useLocation, Redirect } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { Swipeable } from 'react-swipeable'
import PrivateRoutesController from './routes/PrivateRoutesController'
import Navbar from './components/navbar/Nav'
import Sidebar from './components/sidebar/Sidebar'
import PublicRoute from './components/route/PublicRoute'
import AuthPage from './pages/auth/Autho'
import BasicLoader from './components/load/BasicLoader'
import { userState } from './global-state/miscState'
import client from './api/client'

// Hooks
import useLoadActiveListData from './hooks/useLoadActiveListData'
import useFetchCategories from './hooks/useFetchCategories'
import useFetchItems from './hooks/useFetchItems'
import useLoadHistoryLists from './hooks/useFetchHistoryLists'
import useSidebarShow from './hooks/useSidebarShow'
const App: React.FC = () => {
    const [user, setUser] = useRecoilState(userState)
    const [init, setInit] = useState(true)
    const [lastHeight, setLastHeight] = useState(0)
    const history = useHistory()
    const location = useLocation()
    const initialActiveShopListData = useLoadActiveListData()
    const fetchCategories = useFetchCategories()
    const fetchItems = useFetchItems()
    const fetchShopListHistory = useLoadHistoryLists()
    const showSidebar = useSidebarShow()
 useEffect(() => {
        if (location.search.length > 0) {
            const access_token = new URLSearchParams(location.search).get(
                'access_token'
            )
            if (access_token) {

                localStorage.setItem('token', access_token)
                getUserConnected()
            }
        }
    }, [location.search])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            // Fetch the user
            if (location.search === '') {
                getUserConnected()
            }
        } else {
            setInit(false)
            history.push('/login')
        }
    }, [])

    useEffect(() => {
        const resize = () => {
            let vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }

        resize()
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    const initData = async () => {
        await fetchCategories()
        await fetchItems()
        await initialActiveShopListData()
        await fetchShopListHistory()
    }

    useEffect(() => {
        if (user !== null) {
            initData()
            setInit(false)
        }
    }, [user])

    const getUserConnected = useCallback(async () => {
        try {
            const res = await client.get('me')
            const { id } = res.data.data
            setUser(id)
        } catch (e) {
            console.log('Error fetching the connected user', e)
            setInit(false)
            history.push('/login')
        }
    }, [])

    if (init)
        return (
            <div className="h-screen">
                <BasicLoader />
            </div>
        )

    if (user) {
        return (
            <Swipeable
                onSwiped={(eventData) => {
                    if (eventData.dir === 'Left' || eventData.dir === 'Right') {
                        showSidebar(eventData.dir)
                    }
                }}
            >
                <div className="flex justify-between custom100vh w-full overflow-hidden relative">
                    <Navbar />
                    <div className="flex-grow bg-gray-extra-light">
                        <PrivateRoutesController />
                    </div>
                    <Sidebar />
                </div>
            </Swipeable>
        )
    }

    return (
        <Switch>
            <PublicRoute component={AuthPage} path="/login" />
            <PublicRoute component={AuthPage} path="/register" />
            <Redirect to="/login" />
        </Switch>
    )
}

export default hot(App)
