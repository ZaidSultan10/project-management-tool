import { faUser, faChartLine, faList, 
    faUserFriends, faChartBar, faCalendarAlt,
    faCommentDots, faArrowAltCircleRight } from '@fortawesome/fontawesome-free-solid'

export const optionDataTop = [{
    option:'Activity',
    icon:faChartLine,
},{
    option:'My Profile',
    icon:faUser
}]

export const optionDataPage = [{
    option:'Dashboard',
    icon:faChartBar,
},{
    option:'Tasks',
    icon:faList
},{
    option:'Teams',
    icon:faUserFriends
},{
    option:'Messages',
    icon:faCommentDots,
},{
    option:'Calender',
    icon:faCalendarAlt
}]

export const optionDataLabel = [{
    option:'High Priority',
    icon:faArrowAltCircleRight,
    color:'red'
},{
    option:'Medium Priority',
    icon:faArrowAltCircleRight,
    color:'orange'
},{
    option:'Low Priority',
    icon:faArrowAltCircleRight,
    color:'yellow'
},{
    option:'On Standby',
    icon:faArrowAltCircleRight,
    color:'green'
}]