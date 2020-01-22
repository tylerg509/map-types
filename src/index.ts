//import and make something happen = lowercase name
import { User } from './User'
import {Company } from './Company'
import {CustomMap} from './CustomMap'

const user = new User();
const company = new Company()
const customMap = new CustomMap('map');

customMap.addMarker(user)
customMap.addCompanyMarker(company)