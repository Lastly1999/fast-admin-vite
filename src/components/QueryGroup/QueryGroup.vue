<script lang="ts" setup>
import {reactive} from "vue"
import type {PropType} from "vue"
import type {Moment} from 'moment'
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';

export type QueryJsonItem = {
    type?: string;
    label?: string;
    placeholder?: string | string[];
    required?: boolean;
    prop?: any;
} & JsonButton &
    JsonInput;

export type JsonInput = {};

export type JsonButton = {
    buttonType?: string;
    text?: string;
    fun?: (data?: any) => void;
    change?: (value: Moment[], dateString: string[]) => void;
    ok?: (data: any) => void;
};

const props = defineProps({
    jsonData: {
        type: Array as PropType<QueryJsonItem[]>,
        default: () => [],
    },
    form: {
        type: Object as any,
        default: () => {
        }
    }
});

const emit = defineEmits<{
    (event: "add"): void;
    (event: "search"): void;
    (event: "reset"): void;
}>();

const append = (): void => {
    emit("add");
};

const search = (): void => {
    emit("search");
};

const resetFields = () => {
    emit("reset");
};

const rangeDateOk = (value: Moment[], jsonItem: QueryJsonItem) => {
    console.log(jsonItem)
    jsonItem.ok && jsonItem.ok(value)
}

const rangeDateChange = (value: Moment[], dateString: string[], jsonItem: QueryJsonItem) => {
    jsonItem.change && jsonItem.change(value, dateString)
}


const modelRef = reactive({
    name: "",
    region: undefined,
    type: [],
});
</script>
<template>
    <div class="permissions-fillter">
        <a-form layout="inline" :modal="form">
            <a-form-item v-for="jsonItem in jsonData" :label="jsonItem.label" :required="jsonItem.required">
                <a-input v-if="jsonItem.type === 'input'" v-model:value="form[jsonItem.prop]"
                         :placeholder="jsonItem.placeholder"/>
                <a-button v-if="jsonItem.type === 'button'" :type="jsonItem.buttonType"
                          @click.prevent="() => jsonItem.fun && jsonItem.fun()">{{ jsonItem.text }}
                </a-button>
                <a-range-picker
                    v-if="jsonItem.type === 'rangePicker'"
                    v-model:value="form[jsonItem.prop]"
                    :show-time="{ format: 'YYY-MM-DD HH:MM:SS' }"
                    format="YYYY-MM-DD HH:mm:ss"
                    :placeholder="jsonItem.placeholder"
                    showToday
                    :locale="locale"
                    @change="(value, dateString) => jsonItem.change && jsonItem.change(value,dateString)"
                    @ok="(value) => jsonItem.ok && jsonItem.ok(value)"
                />
            </a-form-item>
        </a-form>
    </div>
</template>
<style>
.permissions-fillter {
    padding: 10px;
    background-color: #fff;
    margin-bottom: 10px;
}
</style>
