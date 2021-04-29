export function contactToArray(number) {
    let localArr = [];
    if (Array.isArray(number)) {
        for (const contact of number) {
            if (contact !== "")
                localArr.push(`${contact}@c.us`);
        }
    } else {
        let arrContacts = number.split(/\s*[,;]\s*/g);
        for (const contact of arrContacts) {
            if (contact !== "")
                localArr.push(`${contact}@c.us`);
        }
    }

    return localArr;
}

export function groupToArray(group) {
    let localArr = [];
    if (Array.isArray(group)) {
        for (const contact of group) {
            if (contact !== "")
                localArr.push(`${contact}@g.us`);
        }
    } else {
        let arrContacts = group.split(/\s*[,;]\s*/g);
        for (const contact of arrContacts) {
            if (contact !== "")
                localArr.push(`${contact}@g.us`);
        }
    }

    return localArr;
}

export function groupNameToArray(group) {
    let localArr = [];
    if (Array.isArray(group)) {
        for (const contact of group) {
            if (contact !== "")
                localArr.push(`${contact}`);
        }
    } else {
        let arrContacts = group.split(/\s*[,;]\s*/g);
        for (const contact of arrContacts) {
            if (contact !== "")
                localArr.push(`${contact}`);
        }
    }

    return localArr;
}