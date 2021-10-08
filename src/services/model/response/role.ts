export type LoginForm = {
    userName: string;
    passWord: string;
    codeAuth: string;
    code: string;
}

export type UserInfo = {
    id: number;
    userName: string;
    userPass: string;
    userAvatar: string;
    userSign: string;
    createDate: string;
    activatedAt: string;
    name: string;
    email: string;
    birthday: string;
    age: number;
}

export interface RoleForm {
    roleId: number;
    roleName: string;
    describe: string;
    createDate: string;
    state?: number;
}

export interface RolePermissionParam {
    roleId: number | null;
    permissionId: number[];
}

export type MenuInfo = {
    menuName?: string;
    menuIcon?: string | null;
    menuPath?: string;
    menuParentId?: number;
    menuParentName?: string;
}

export type ApiLogsParams = {
    timer: string[];
    page: number;
    pageSize: number;
}