import {userGetters} from "./user";
import {systemGetters} from "./system"

export default {
    ...userGetters,
    ...systemGetters
}