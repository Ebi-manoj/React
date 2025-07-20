const data = [
  {
    id: 1,
    name: 'Ebi',
    email: 'ebimanoj@gmail.com',
  },
  {
    id: 2,
    name: 'Nidhi',
    email: 'nidhimanoj28@gmail.com',
  },
];

export const Profile = () => {
  return (
    <div>
      {data.map(d => (
        <ProfileCard key={data.id} data={d} />
      ))}
    </div>
  );
};

const ProfileCard = ({ data }) => {
  return (
    <div id="profile-card">
      <h1>{data.name}</h1>
      <h5>{data.email}</h5>
    </div>
  );
};
