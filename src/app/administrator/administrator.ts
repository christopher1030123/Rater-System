
export class Administrator {
    _id: number;
    username: string;
    course_ids: number[];
    review_ids: number[];
    student_ids: number[];
    teacher_ids: number[];

    constructor(_id: number, username: string, course_ids: number[], review_ids: number[], student_ids: number[], teacher_ids: number[]) {
        this._id = _id;
        this.username = username;
        this.course_ids = course_ids;
        this.review_ids = review_ids;
        this.student_ids = student_ids;
        this.teacher_ids = teacher_ids;
    }
}