import Client from './api'

export const GetSchedules = async () => {
  try {
    const res = await Client.get('/schedule')
    return res.data
  } catch (error) {
    throw error
  }
}
