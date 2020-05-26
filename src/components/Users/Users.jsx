import React from 'react';
import styles from './users.module.css';


let Users = (props) => {

if (props.users.length === 0) {
    props.setUsers([
            {
                id: 1,
                photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600',
                followed: true,
                fullName: 'Zhenya',
                status: 'Hard work',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600',
                followed: true,
                fullName: 'Katya',
                status: 'Hard work every day',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600',
                followed: false,
                fullName: 'Andrey',
                status: 'Chill',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600',
                followed: false,
                fullName: 'Marina',
                status: 'Weekend',
                location: {city: 'New York', country: 'America'}
            }
        ]
    )
}


    return (
    <div>
            {
                props.users.map ( u => <div key={u.id}>
    <span>
        <div>
            <img className={styles.userPhoto} src={u.photoUrl}/>
        </div>
        <div>
            {u.followed
                ? <button onClick={() => {
                    props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                    props.follow(u.id)
                }}>Follow</button>}

        </div>
    </span>
                    <span>
        <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
        </span>
        <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
        </span>
    </span>
                </div>)
            }
        </div>
    )

}

export default Users;
