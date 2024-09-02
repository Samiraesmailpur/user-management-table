import { useState, useEffect } from 'react';
import { getUsers } from '../../store/users/operations';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { selectUsers } from '../../store/users/selectors';
import SearchInput from '../SearchInput/SearchInput';
import './UserTable.scss'

const UserTable = () => {
  const dispatch = useAppDispatch();
  const usersData = useAppSelector(selectUsers);
  const [searchName, setSearchName] = useState('');
  const [searchUsername, setSearchUsername] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [searchPhone, setSearchPhone] = useState('');

  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  const filteredUsers = usersData?.filter(user => 
    user.name.toLowerCase().includes(searchName.toLowerCase()) &&
    user.username.toLowerCase().includes(searchUsername.toLowerCase()) &&
    user.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
    user.phone.toLowerCase().includes(searchPhone.toLowerCase())
  );
  

  return (
    <div className='container'>
      <div className='filter-container'>
        <SearchInput placeholder="Search Name" value={searchName} setSearch={setSearchName}/>
        <SearchInput placeholder="Search Username" value={searchUsername} setSearch={setSearchUsername}/>
        <SearchInput placeholder="Search Email" value={searchEmail} setSearch={setSearchEmail}/>
        <SearchInput placeholder="Search Phone"  value={searchPhone} setSearch={setSearchPhone}/>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Email
            </th>
            <th>
              Phone Number
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers?.length > 0 ? (
            filteredUsers?.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Users not found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
};

export default UserTable;
