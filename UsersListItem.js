import {GoAlert} from 'react-icons/go';
import Button from './Button';
import ExpandablePanel from './ExpandablePanel';

import removeUser from '../store/thunks/removeUser';
import { useThunk } from '../hooks/use-thunk';
import AlbumsList from './AlbumsList';


function UsersListItem({ user }) {

    const [doRemoveUser,isLoading,error]=useThunk(removeUser);

    const handleClick=()=>
    {
        doRemoveUser(user);

    }

    const header= <div>

<   Button className='mr-3' loading={isLoading} onClick={handleClick}>
            <GoAlert />

          </Button>
          {error && <div> Error deleting user</div>}
          
          {user.name}
    
    
    </div>
    return (
      
          <ExpandablePanel header={header}>
          <AlbumsList  user={user}/>
          </ExpandablePanel>
      
    )
  }
  
  export default UsersListItem;
  