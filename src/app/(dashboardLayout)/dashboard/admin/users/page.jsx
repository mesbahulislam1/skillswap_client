import { getAllUsers, updateUsers } from "@/lib/api/user/session";
import FilterSearch from "./FilterSearch";
import { Button, Table } from "@heroui/react";
import UserCard from "@/components/UserCard";


export default async function UserManagementHeader({searchParams}) {
  
  const params = await searchParams;
  const sParams =new URLSearchParams()

  if (params?.role) {
    sParams.set('role', params?.role)
  }
  if (params?.search) {
    sParams.set('search', params?.search)
  }


const user = await getAllUsers(sParams.toString());


  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-white font-sans select-none">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-950 tracking-tight">
          User Management
        </h1>
        <p className="text-gray-500 text-sm mt-1">{user?.length} total users</p>
      </div>

      {/* Controls Section (Search & Filter) */}
      <FilterSearch></FilterSearch>

      <Table className="mt-9">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px] ">
            <Table.Header>
              <Table.Column isRowHeader className={'text-[17px] text-black'}>User</Table.Column>
              <Table.Column className={'text-[17px] text-black'}>Role</Table.Column>
              <Table.Column className={'text-[17px] text-black'}>Status</Table.Column>
              <Table.Column className={'text-[17px] text-black'}>Joined</Table.Column>
              <Table.Column className={'text-[17px] text-black'}>Actions</Table.Column>
            </Table.Header>

            <Table.Body>
              {user.map((usr) => {
              return <UserCard  key={usr._id} usr={usr}></UserCard>;
            })}
            </Table.Body>
            
          </Table.Content>
        </Table.ScrollContainer>
      </Table>

      
    </div>
  );
}
