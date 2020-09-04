class Developer {
    department: string;
    private _title!: string;

    public get title(): string {
        return this._title;
    }

    public set title(newTitle: string) {
        this._title = newTitle.toUpperCase();
    }

    /**
     *
     */
    constructor(department: string) {
        this.department = department;
    }
}