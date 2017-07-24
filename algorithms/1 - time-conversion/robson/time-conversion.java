import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    static String timeConversion(String s) {
        String[] params = s.split(":");
        String result = "";
        if(s.contains("PM")){
            String hour = Integer.toString(Integer.parseInt(params[0]) + 12);
            if(hour.equals("24"))
                hour = "00";
            result = hour +":"+ params[1] +":"+ params[2].substring(0,2);
            return result;
        }
        result = params[0] +":"+ params[1] +":"+ params[2].substring(0,2);
        return result;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String s = in.next();
        String result = timeConversion(s);
        System.out.println(result);
    }
}

