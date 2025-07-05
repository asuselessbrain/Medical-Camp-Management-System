import { FaHandshakeAngle, FaHospitalUser, FaUser, FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router";

const Registration = () => {
    return (
        <div className="min-h-screen flex flex-col bg-muted items-center justify-center gap-16">
            <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold md:text-3xl">MediCare</h2>
                <h3 className="text-xl md:text-2xl">Join as a patient, doctor, organizer or volunteer </h3>
            </div>

            <div className="flex items-center justify-between gap-6">
                <Link to="/registration/patient" className="bg-white rounded-lg border-2 max-w-xs p-12 space-y-4 hover:border-green-500 hover:text-green-500 cursor-pointer duration-600">
                    <FaHospitalUser size={40} />
                    <h4 className="text-xl font-normal">I'm a patient, looking for medical help</h4>
                </Link>
                <div className="bg-white rounded-lg border max-w-xs p-12 space-y-4 hover:border-green-500 hover:text-green-500 cursor-pointer duration-600">
                    <FaUserDoctor size={40} />
                    <h4 className="text-xl font-normal">I'm a doctor, ready to treat patients</h4>
                </div>
                <div className="bg-white rounded-lg border max-w-xs p-12 space-y-4 hover:border-green-500 hover:text-green-500 cursor-pointer duration-600">
                    <FaUser size={40} />
                    <h4 className="text-xl font-normal">I'm an organizer, managing camp</h4>
                </div>
                <div className="bg-white rounded-lg border max-w-xs p-12 space-y-4 hover:border-green-500 hover:text-green-500 cursor-pointer duration-600">
                    <FaHandshakeAngle size={40} />
                    <h4 className="text-xl font-normal">I'm a volunteer, here to assist and support</h4>
                </div>
            </div>
        </div>
    )
}

export default Registration;