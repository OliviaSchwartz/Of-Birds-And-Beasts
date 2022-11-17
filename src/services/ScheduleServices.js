import Client from './api'

export const GetSchedules = async () => {
  try {
    const res = await Client.get(`/schedule`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetSchedulesById = async (id) => {
  try {
    const res = await Client.get(`/schedule/${id}`)
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

export const UpdateSchedule = async (schedule_Id, data) => {
  try {
    const res = await Client.put(`/schedule/${schedule_Id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteSchedule = async (id) => {
  try {
    const res = await Client.delete(`/schedule/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
