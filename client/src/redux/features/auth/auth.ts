import { baseAPi } from "@/redux/baseApi/BaseApi";

const authApi = baseAPi.injectEndpoints({
    endpoints: (build) => ({
        createPatient: build.mutation({
            query: (patientData) => ({
                url: '/user/create-patient',
                method: "POST",
                body: patientData
            })
        }),
    }),
})

export const { useCreatePatientMutation } = authApi;