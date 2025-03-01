import React, { useEffect } from 'react'
import Navbar from '../shared/Navbar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { useParams } from 'react-router-dom'

function Applicants() {

    const params = useParams();
    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants`, { withCredentials: true })
                if (res.data.success) {

                }
            } catch (error) {
                console.log(error)
            }
        }
    }, [])

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-5'>
                <h1 className='font-bold text-xl'>Applicants (2)</h1>
                <ApplicantsTable />
            </div>
        </div>
    )
}

export default Applicants