import {userMutations} from "./user"
import {systemMutations} from "./system"

export default {
    ...userMutations,
    ...systemMutations
}