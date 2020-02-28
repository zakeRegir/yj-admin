import globalForm from '@/components/globalForm'
import globalFormItem from '@/components/globalFormItem'
import globalSelect from '@/components/globalSelect'
export default Vue => {
  Vue.component('gbForm', globalForm)
  Vue.component('gbFormItem', globalFormItem)
  Vue.component('gbSelect', globalSelect)
}
