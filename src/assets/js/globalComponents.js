
import globalForm from '@/components/globalForm'
import globalFormItem from '@/components/globalFormItem'
import globalSelect from '@/components/globalSelect'
export default (Vue) => {
  Vue.component('gbFrom', globalForm)
  Vue.component('gbFromItem', globalFormItem)
  Vue.component('gbSelect', globalSelect)
}
