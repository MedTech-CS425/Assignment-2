import './Home.css'
import {useEffect, useState} from 'react'
import LeftMenu from '../../components/left-menu/LeftMenu'
import ItemsList from '../items-list/ItemsList'
import CategoriesService from '../../services/CategoriesService'
import ItemsService from '../../services/ItemsService'
import AddItemForm from '../../components/right-section/add-item-form/AddItemForm'
import ActiveList from '../../components/right-section/active-list/ActiveList'
import ItemDetails from '../../components/right-section/item-details/ItemDetails'
import ListsService from '../../services/ListsService'
import History from '../history/History'

function Home(props) {

    let [categories, setCategories] = useState([])
    let [items, setItems] = useState([])
    let [itemsChanged, setItemsChanged] = useState(false)
    let [clickedItem, setClickedItem] = useState(null)

    let [lists, setLists] = useState([])
    let [listsChanged, setListsChanged] = useState(false)

    let [selectedSidePage, setSelectedSidePage] = useState(1)
    let [selectedPage, setSelectedPage] = useState(0)

    let [listItems, setListItems] = useState([])
    let [listItemsChanged, setListItemsChanged] = useState([])

    function reloadItems() {
        setItemsChanged(!itemsChanged)
    }

    useEffect(() => {
        ListsService.get().then(res => {
            setLists(res.data)
        })
    }, [listsChanged])

    useEffect(() => {
        CategoriesService.get().then(res => {
            setCategories(res.data)
        })

        ItemsService.get().then(res => {
            setItems(res.data)
        })
    }, [itemsChanged])

    useEffect(() => {
        if(clickedItem)
            setSelectedSidePage(2)
    }, [clickedItem])

    function onItemCreated(){
        reloadItems()
        gotoDefaultSidePage()
    }

    function gotoDefaultSidePage(){
        setSelectedSidePage(1)
        setClickedItem(null)
    }

    let activeList = lists.filter(list => list.status === 1)
    activeList = activeList.length === 0 ? null : activeList[0]

    useEffect(() => {
        if(!activeList) return;
        ListsService.getItems(activeList._id).then(res => {
            setListItems(res.data)
        })
    }, [listItemsChanged, activeList])

    let page = <div>Not Found</div>;
    if(selectedPage === 0)
        page = <ItemsList activeList={activeList} categories={categories} items={items} onItemClick={setClickedItem} onListItemsUpdate={() => {gotoDefaultSidePage(); setListItemsChanged(!listItemsChanged)}}/>
    else if(selectedPage === 1)
        page = <History categories={categories} lists={lists}/>

    let sidePage = <div>Not Found</div>;
    if(selectedSidePage === 0)
        sidePage = <AddItemForm categories={categories} onSave={onItemCreated} onCancel={() => setSelectedSidePage(1)}/>
    else if(selectedSidePage === 1)
        sidePage = <ActiveList list={activeList} listItems={listItems} categories={categories} onListsChanged={() => setListsChanged(!listsChanged)} onAddItemClick={() => setSelectedSidePage(0)} onListItemsUpdate={() => {gotoDefaultSidePage(); setListItemsChanged(!listItemsChanged)}}/>
    else if(selectedSidePage === 2)
        sidePage = <ItemDetails activeList={activeList} item={clickedItem} categories={categories} onBackClick={gotoDefaultSidePage} onListItemsUpdate={() => {gotoDefaultSidePage(); setListItemsChanged(!listItemsChanged)}} onItemDelete={() => {gotoDefaultSidePage(); setListItemsChanged(!listItemsChanged); setItemsChanged(!itemsChanged)}}/>

    return (
        <div style={{height: '100%'}}>
            <div className="menu-left"><LeftMenu selectedPage={selectedPage} selectPage={setSelectedPage}/></div>
            <div className="main-body">
                {page}
            </div>
            <div className="right-section">{sidePage}</div>
        </div>
    )
}

export default Home