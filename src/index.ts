//import and make something happen = lowercase name
import { User } from './User'
import {Company } from './Company'
import {CustomMap} from './CustomMap'

const user = new User();
const company = new Company()
const customMap = new CustomMap('map');

//note that we use addmarker for user and company
//the interface on addmarker accepts any arguments
//the have location: lat and lng
customMap.addMarker(user)
customMap.addMarker(company)