import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

interface UserCardProps {
  user: any; // Adjust the type as needed
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card>
      <CardContent>
        {/* Simple title */}
        <Typography variant="h5" gutterBottom>
          The Team of AMCLLC
        </Typography>
        
        {/* Adjusted size of the profile picture */}
        <CardMedia component="img" image={user.image} alt={`${user.firstName} ${user.lastName}`} sx={{ maxWidth: '100%', height: 'auto' }} />
        
        <Typography variant="h5">{`${user.firstName} ${user.lastName}`}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Age: {user.age}</Typography>
        {/* Render additional data only when showMore is true */}
        {showMore && (
          <>
            <Typography>Gender: {user.gender}</Typography>
            <Typography>Phone: {user.phone}</Typography>
            <Typography>Username: {user.username}</Typography>
            <Typography>Birth Date: {user.birthDate}</Typography>
            <Typography>Height: {user.height} cm</Typography>
            <Typography>Weight: {user.weight} kg</Typography>
            <Typography>Eye Color: {user.eyeColor}</Typography>
            <Typography>Hair Color: {user.hair.color}</Typography>
            <Typography>Hair Type: {user.hair.type}</Typography>
            <Typography>Blood Group: {user.bloodGroup}</Typography>
            <Typography>Domain: {user.domain}</Typography>
            <Typography>University: {user.university}</Typography>
            <Typography>Company: {user.company.name}</Typography>
            <Typography>Department: {user.company.department}</Typography>
            <Typography>Title: {user.company.title}</Typography>
            <Typography>Address: {user.address.address}</Typography>
            <Typography>City: {user.address.city}</Typography>
            <Typography>State: {user.address.state}</Typography>
            <Typography>Postal Code: {user.address.postalCode}</Typography>
            <Typography>EIN: {user.ein}</Typography>
            <Typography>SSN: {user.ssn}</Typography>
            <Typography>User Agent: {user.userAgent}</Typography>
            <Typography>Crypto Coin: {user.crypto.coin}</Typography>
            <Typography>Wallet: {user.crypto.wallet}</Typography>
            <Typography>Network: {user.crypto.network}</Typography>
          </>
        )}
        <Button onClick={handleToggleShowMore}>
          {showMore ? 'Show Less' : 'Load More'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
