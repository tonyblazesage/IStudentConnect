import { Photo } from "./photo";

    export interface Student {
        id: number;
        username: string;
        photoUrl: string;
        firstname: string;
        lastName: string;
        age: number;
        created: Date;
        lastActive: Date;
        gender: string;
        introduction: string;
        interests: string;
        skills: string;
        universityName: string;
        degreetype: string;
        course: string;
        startdate: Date;
        countryOfStudy: string;
        cityOfStudy: string;
        photos: Photo[];
        studentId: string;
    }

