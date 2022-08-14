import { faUser, faChartLine, faList, 
    faUserFriends, faChartBar, faCalendarAlt,
    faCommentDots, faArrowAltCircleRight } from '@fortawesome/fontawesome-free-solid'

export const optionDataTop = [{
    id:1,
    option:'Activity',
    icon:faChartLine,
},{
    id:2,
    option:'My Profile',
    icon:faUser
}]

export const optionDataPage = [{
    id:3,
    option:'Dashboard',
    icon:faChartBar,
},{
    id:4,
    option:'Tasks',
    icon:faList
},{
    id:5,
    option:'Teams',
    icon:faUserFriends
},{
    id:6,
    option:'Messages',
    icon:faCommentDots,
},{
    id:7,
    option:'Calender',
    icon:faCalendarAlt
}]

export const optionDataLabel = [{
    id:8,
    option:'High Priority',
    icon:faArrowAltCircleRight,
    color:'red'
},{
    id:9,
    option:'Medium Priority',
    icon:faArrowAltCircleRight,
    color:'orange'
},{
    id:10,
    option:'Low Priority',
    icon:faArrowAltCircleRight,
    color:'yellow'
},{
    id:11,
    option:'On Standby',
    icon:faArrowAltCircleRight,
    color:'green'
}]