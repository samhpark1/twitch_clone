import express, {Request, Response} from 'express';

export const getAllUsers = (req: Request, res: Response): void => {
    res.status(200).json({"message": "imagine these are all the users"});
}