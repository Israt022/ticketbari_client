"use client";
import { authClient } from "@/lib/auth-client";
import { imgUpload } from "@/lib/imageUpload";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const UpdateUserProfile = () => {
    const onSubmit = async(e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        // const image = e.target.image.value;
        const imageFile = e.target.image.files[0];
        const image = await imgUpload(imageFile);
        console.log(image);

        await authClient.updateUser({
            name,
            image : image?.url,
        })
        console.log({name,image});
    }
    return (
        <Modal>
            <Button variant="secondary"><BiEdit/> Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                <Modal.Dialog className="sm:max-w-md">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                    <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                        <FaUserCircle className="size-5" />
                    </Modal.Icon>
                    <Modal.Heading>Update Your Profile</Modal.Heading>
                    </Modal.Header>
                    <Modal.Body className="p-6">
                    <Surface variant="default">
                        <form onSubmit={onSubmit} className="flex flex-col gap-4">
                        <TextField className="w-full" name="name" type="text">
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                        </TextField>
                        {/* image */}
                        <TextField className="w-full" name="image">
                            <Label>Profile Image</Label>

                            <label className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-default-100 transition">
                                <FaUserCircle className="size-12 text-default-400 mb-2" />
                                <span className="text-sm text-default-500">
                                    Click to upload profile image
                                </span>

                                <input
                                    type="file"
                                    accept="image/*"
                                    name="image"
                                    className="hidden"
                                />
                            </label>
                        </TextField>

                                {/* Buttons */}
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button type="submit" slot="close">Update</Button>
                            </Modal.Footer>
                        </form>
                    </Surface>
                    </Modal.Body>
                    
                </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default UpdateUserProfile;