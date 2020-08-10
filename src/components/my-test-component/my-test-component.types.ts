export interface Name {
    /**
     * The first name
     */
    first: string;

    /**
     * The middle name
     * @deprecated This is no longer used
     */
    middle?: string;

    /**
     * The last name
     */
    last: string;

    /**
     * The title
     */
    title?: Title;
}

/**
 * What kind of person are you?
 */
export enum Title {
    /**
     * For men, regardless of marital status, who do not have another
     * professional or academic title
     */
    Mr = 'Mr',

    /**
     * For girls, unmarried women and (in the UK) married women who continue to
     * use their maiden name
     */
    Miss = 'Miss',

    /**
     * For married women who do not have another professional or academic title
     */
    Mrs = 'Mrs',

    /**
     * For male barons, viscounts, earls, and marquesses, as well as some of
     * their children
     */
    Lord = 'Lord',

    /**
     * For female peers with the rank of baroness, viscountess, countess, and
     * marchioness, or the wives of men who hold the equivalent titles
     */
    Lady = 'Lady',

    /**
     * For the holder of a doctoral degree and for medical practitioners,
     * dentists and veterinary surgeons
     */
    Dr = 'Dr'
}

/**
 * This is an error
 */
export interface MyError {
    /**
     * What happened?
     */
    message?: string;
}
