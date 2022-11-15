import Client from './api'

export const GetSchedules = async () => {
  try {
    const res = await Client.get('/schedule')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateSchedules = async (data, id) => {
  try {
    const res = await Client.post(`/schedule/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
