import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useDocument = (collection) => {
  const error = ref(null)
  const isPending = ref(false)

  const deleteDoc = async (id) => {
    let docRef = projectFirestore.collection(collection).doc(id)
    isPending.value = true
    error.value = null
    try {
      const res = await docRef.delete()
      isPending.value = false
      return res
    } catch (err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not delete the document'
    }
  }

  const updateDoc = async (id, updates) => {
    let docRef = projectFirestore.collection(collection).doc(id)
    isPending.value = true
    error.value = null
    try {
      const res = await docRef.update(updates)
      isPending.value = false
      return res
    } catch (err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not update the document'
    }
  }

  return { error, isPending, deleteDoc, updateDoc }
}

export default useDocument
