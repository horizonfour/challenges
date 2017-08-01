Function ReadFile(path)
    Set file = CreateObject("Scripting.FileSystemObject").OpenTextFile(path)

    ReadFile = file.ReadAll()

    file.Close()

    Set file = Nothing
End Function

Sub WriteFile(path, content)
    Set file = CreateObject("Scripting.FileSystemObject").CreateTextFile(path)

    file.Write content

    file.Close()
End Sub

Function CompareAsInteger(str1, str2)
    len1 = Len(str1)
    len2 = Len(str2)

    If len1 = len2 Then
        CompareAsInteger = str1 <= str2
    Else
        CompareAsInteger = len1 <= len2
    End If
End Function

Function Merge(arr1, arr2, Comparer)
    arrMerged = Array()

    ReDim Preserve arrMerged(UBound(arr1) + UBound(arr2) + 1)

    arr1index = 0
    arr2index = 0
    arrMergedIndex = 0

    Do While arr1index <= UBound(arr1) And arr2index <= UBound(arr2)
        If Comparer(arr1(arr1index), arr2(arr2index)) Then
            arrMerged(arrMergedIndex) = arr1(arr1index)
            arr1index = arr1index + 1
        Else
            arrMerged(arrMergedIndex) = arr2(arr2index)
            arr2index = arr2index + 1
        End If

        arrMergedIndex = arrMergedIndex + 1
    Loop

    If arrMergedIndex <= UBound(arrMerged) Then
        For i = arr1index To UBound(arr1)
            arrMerged(arrMergedIndex) = arr1(i)
            arrMergedIndex = arrMergedIndex + 1
        Next

        For i = arr2index To UBound(arr2)
            arrMerged(arrMergedIndex) = arr2(i)
            arrMergedIndex = arrMergedIndex + 1
        Next
    End If

    Merge = arrMerged
End Function

Function Sort(arr, Comparer)
    If UBound(arr) = 0 Then
        Sort = arr

        Exit Function
    End If

    arr1 = Array()
    arr2 = Array()

    arr1UBound = Int(UBound(arr) / 2)

    ReDim Preserve arr1(arr1UBound)
    ReDim Preserve arr2(UBound(arr) - arr1UBound - 1)

    For i = 0 To UBound(arr1)
        arr1(i) = arr(i)
    Next

    For i = 0 To UBound(arr2)
        arr2(i) = arr(i + arr1UBound + 1)
    Next

    Sort = Merge(Sort(arr1, Comparer), Sort(arr2, Comparer), Comparer)
End Function

Function Main()
    lines = Split(ReadFile("input.txt"), vbCrLf)

    linesSkipFirst = Array()

    ReDim Preserve linesSkipFirst(UBound(lines) - 1)

    For i = 1 To UBound(lines)
        linesSkipFirst(i - 1) = lines(i)
    Next

    sorted = Sort(linesSkipFirst, GetRef("CompareAsInteger"))

    WriteFile "output.txt", Join(sorted, vbCrLf)
End Function

Main()
