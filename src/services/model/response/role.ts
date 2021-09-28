export type LoginForm = {
    userName: string;
    passWord: string;
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
