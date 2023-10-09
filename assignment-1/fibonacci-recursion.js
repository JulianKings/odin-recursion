const fibsRec = (n, pos = 0, arr = []) =>
{

    if(pos <= 1)
    {
        arr.push(pos);
    }

    if(pos === n)
    {
        return arr;
    }

    if(pos > 1)
    {
        arr.push(+(arr[pos-1]) + +(arr[pos-2]))

    }

    return fibsRec(n, pos+1, arr);
}