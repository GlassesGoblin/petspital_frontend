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


const AppointmentDeleteModalButton = ({appointmentID}) => {

    const navigate = useNavigate();

    const handleDeleteAppointment = async () => {
        try {
            const url = `http://localhost:8080/reservation/${appointmentID}`;
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
                const errorText = await response.text();
                throw new Error(errorText || 'Failed to delete appointment.');
            }
        } catch (err) {
            console.error("Error deleting appointment:", err);
            toaster.create({
                title: "Failed to delete appointment.",
                description: err.message,
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    };

    return (
        <div className="appointmentDeleteModalButton">
            <DialogRoot minH='1000px'>
                <DialogTrigger>
                    <Button margin="0.5rem" fontSize={{ base: '0.75rem', md: '0.75rem', lg: '0.9rem' }}>
                        Delete
                    </Button>
                </DialogTrigger>
                <DialogContent marginLeft='0.5rem' marginRight='0.5rem'>
                    <DialogCloseTrigger />
                    <DialogHeader>
                    <DialogTitle>Deleting Appointment</DialogTitle>
                    </DialogHeader>
                    <DialogBody pb={6}>
                        <Text>Are you really want to delete?</Text>
                    </DialogBody>

                    <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button onClick={handleDeleteAppointment}>Delete</Button>
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

export default AppointmentDeleteModalButton