import Client from './api'

export const GetAnimals = async () => {
  try {
    const res = await Client.get('/animal')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetOneAnimal = async (id) => {
  try {
    const res = await Client.get(`/animal/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAnimalType = async (id) => {
  try {
    const res = await Client.get(`/animal/type/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
