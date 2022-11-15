import Client from './api'

export const GetExhibits = async () => {
  try {
    const res = await Client.get('/exhibit')
    return res.data
  } catch (error) {
    throw error
  }
}
