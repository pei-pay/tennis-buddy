import { ref } from '@vue/reactivity'
import { projectAuth } from '../../firebase/config'

const error = ref(null)
const isPending = ref(false)

const updateUser = async (newDisplayName) => {
  let user = projectAuth.currentUser
  error.value = null
  isPending.value = true
  try {
    const res = await user.updateProfile({
      displayName: newDisplayName,
    })
    isPending.value = false
    return res
  } catch (err) {
    console.log(err.message)
    error.value = 'could not update user profile'
    isPending.value = false
  }
}

const useUser = () => {
  return { updateUser, error, isPending }
}

export default useUser
