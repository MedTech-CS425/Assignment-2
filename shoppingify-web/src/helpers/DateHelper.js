const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]

const DateHelper = {
    printDate: function(dateString) {
        const date = new Date(dateString)
        return days[date.getDay() - 1] + ", " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    }
}

export default DateHelper
