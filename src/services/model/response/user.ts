export type UserSystem = {
    id: number;
    userName: string;
    userAvatar: string;
    roleIds: number[];
    userSign: string;
    createDate: string;
    activatedAt: string;
    name: string;
    email: string;
    role: UserChilRole[];
    birthday: string;
    age: string;
}

export type UserChilRole = {
    roleId: number;
    roleName: string;
    describe: string;
    status: boolean;
    user: null;
    baseMenu: null;
    createdAt: string;
    updatedAt: string;
}

export type RegisterUserForm = {
    userName: string;
    passWord?: string;
    nikeName: string;
}