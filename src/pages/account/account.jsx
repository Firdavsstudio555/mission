import { TrophySpin } from 'react-loading-indicators';
import { useEffect, useState } from "react";
import api from '../../service/api/api';
import { Profile } from './profile';

export function Account() {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({});
    useEffect(() => {
        const fetchprofiles = async () => {
            try {
                const response = await api.get('/auth/profile');
                console.log(JSON.stringify(response.data.user));
                setProfile(response.data.user);
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchprofiles();
    }, []);

    return (
        <div className="overflow-hidden text-gr font-bold text-[23px]">
            <h1 className=" mt-[65px]">Your profile</h1>
            <div>
                {loading ? (
                    <div className="ml-[400px] mt-[150px]">
                        <TrophySpin color="#080612" size="medium" text="Loading..." textColor="#6b6767" />
                    </div>
                ) : (
                    <Profile name={profile?.name} email={profile?.email} />
                )}
            </div>
        </div>
    );
}

export default Account;