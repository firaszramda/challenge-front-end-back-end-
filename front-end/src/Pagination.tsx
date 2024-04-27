import React from 'react';
import { Button, Stack } from '@mui/material';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2} direction="row">
      {[...Array(totalPages)].map((_, index) => (
        <Button key={index + 1} onClick={() => handlePageChange(index + 1)} variant={currentPage === index + 1 ? "contained" : "outlined"}>
          {index + 1}
        </Button>
      ))}
    </Stack>
  );
};

export default Pagination;
