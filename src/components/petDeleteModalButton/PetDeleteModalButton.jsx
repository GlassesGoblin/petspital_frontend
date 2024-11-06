import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
  } from "../ui/dialog";
import { Text } from '@chakra-ui/react';
import { Button } from "../ui/button";
import { toaster } from '../ui/toaster';


const PetDeleteModalButton = ({petID}) => {

    const navigate = useNavigate();

    const handleDeletePet = async () => {
        try {
            const url = `http://localhost:8080/pet/${petID}`;
            const response = await fetch(url, {
                method: 'DELETE',
                credentials: 'include'
            });
            if (response.ok) {
                navigate(0);
                toaster.create({
                    title: "Successfully deleted.",
                    status: "success",
                    duration: 3000,
                    isClosable: true
                });
            } else {
                throw new Error('Failed to delete pet');
            }
        } catch (err) {
            console.log("Failed to delete pet.");
        }
    }

    return (
        <div className="petDeleteModalButton">
            <DialogRoot minH='1000px'>
                <DialogTrigger>
                    <Button margin="0.5rem" fontSize={{ base: '0.75rem', md: '0.75rem', lg: '0.9rem' }}>
                        Delete
                    </Button>
                </DialogTrigger>
                <DialogContent marginLeft='0.5rem' marginRight='0.5rem'>
                    <DialogCloseTrigger />
                    <DialogHeader>
                    <DialogTitle>Deleting Pet</DialogTitle>
                    </DialogHeader>
                    <DialogBody pb={6}>
                        <Text>Are you really want to delete?</Text>
                    </DialogBody>

                    <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button onClick={handleDeletePet}>Delete</Button>
                        </DialogActionTrigger>
                        <DialogActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogActionTrigger>
                    </DialogFooter>
                </DialogContent>
            </DialogRoot>
        </div>
    )
}

export default PetDeleteModalButton