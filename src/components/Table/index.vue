<template>
  <el-table border :data="data" :style="{ width: width }" :max-height="maxHeight" class="custom-table"
    :class="{ 'has-checked': !state.selection.length }" header-row-class-name="header-tr"
    header-cell-class-name="header-th" @selection-change="selectionChange" :row-class-name="tableRowClassName">
    <slot></slot>
    <template #empty>
    <div class="custom-empty">
      <el-empty description="暂无数据" :image-size="100">
      </el-empty>
    </div>
  </template>
  </el-table>
  <div class="pagination" v-if="showBottom && !!data.length">
    <div>
      <slot name="left"></slot>
    </div>
    <el-pagination background layout="prev, pager, next" :page-size="pageSize" :current-page="pageNumber" :total="total"
      @current-change="currentChange" :class="{ 'has-checked-footer': state.selection.length }" v-if="showPage" />
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, withDefaults, reactive, ref } from 'vue'

interface PropsType {
  data: Array<any>
  idKey?: string
  width?: string | number
  showPage?: boolean // 展示分页
  showBottom?: boolean
  total?: number
  pageSize?: number
  pageNumber?: number
  maxHeight?: number | string | undefined
  selectionChange?(): void
}

interface StateType {
  selection: Array<any>,
  selIndex: Array<number>
}

const emit = defineEmits(['pageChange', 'selectionChange'])
const props = withDefaults(defineProps<PropsType>(), {
  width: '100%',
  idKey: 'id',
  showPage: true,
  showBottom: true,
  total: 0,
  pageNumber: 1,
  pageSize: 10,
  maxHeight: undefined
})

const state = reactive<StateType>({
  selection: [],
  selIndex: []
})

const selectionChange = (e: any) => {
  let indexList: Array<number> = []
  state.selection = e
  emit('selectionChange', e)

  props.data.forEach((item: any, index: number) => {
    for (let i = 0; i < state.selection.length; i++) {
      if (state.selection[i][props.idKey] === item[props.idKey]) {
        indexList.push(index)
        break
      }
    }
  })
  state.selIndex = indexList
}

const currentChange = (value: number) => {
  emit('pageChange', value)
}

const tableRowClassName = ({
  rowIndex,
}: {
  row: any
  rowIndex: number
}) => {
  let className = 'body-tr'
  state.selIndex.forEach((item: number) => {
    if (item === rowIndex) {
      className += ' checked-tr'
    }
  })

  return className
}
</script>

<style>
.header-tr {
  color: #666;
  font-weight: normal;
}
.pagination {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
}
.custom-table {
  border-radius: 8px; 
  overflow: hidden;
}

.custom-table.el-table--border {
  border: 1px solid #ebeef5;
}

.custom-table.el-table--border th:first-child {
  border-top-left-radius: 8px;
}

.custom-table.el-table--border th:last-child {
  border-top-right-radius: 8px;
}

.custom-table.el-table--border .el-table__row:last-child td:first-child {
  border-bottom-left-radius: 8px;
}

.custom-table.el-table--border .el-table__row:last-child td:last-child {
  border-bottom-right-radius: 8px;
}
.el-table tr th{
  background-color: #f6f8fa !important;

}


</style>

