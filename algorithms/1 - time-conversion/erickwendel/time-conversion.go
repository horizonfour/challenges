/*
Meia Noite = 12:00:00AM / 00:00:00 
Meio Dia = 12:00:00PM / 12:00:00

string: 07:05:45PM
output: 19:05:45

//OK
string contains PM 
	hora = string[:2]
	if hora == 12
		hora = 12:00
	hora = hora + 12
	return hora
//OK
string contains AM
	hora = string[:2]
	if hora == 12
		hora = 00
	return hora
	

*/
package main
  
import (
  	"fmt"
	"strings"
	"strconv"
  )

func GetFormatWithoutSymbol(code string) string {
	return code[0: 8]
}

func IsMorning (code string) bool {
	return strings.Contains(code, "AM" )
}

func GetHour(code string) string {
	return code[0: 2]
}
func GetFormatWithoutHour(code string) string {
	hourFormated := GetFormatWithoutSymbol(code)
	return hourFormated[2:8]
}
func MidnightFormat(code string) string {
	IsMorning := IsMorning(code)
    if  !IsMorning  {
		return code
	}

	hour := GetHour(code)
	if hour != "12" {
		return code
	}

	finalHour := "00" + GetFormatWithoutHour(code)
 	return finalHour	
}

func To24HoursClock(code string) string {
	IsMorning := IsMorning(code)

	if  IsMorning  {
		return MidnightFormat(code)
	}

	hourStr := GetHour(code)
	if "12" == hourStr {
		return GetFormatWithoutSymbol(code)
	}
	hour, err := strconv.ParseInt(hourStr, 10, 32)
	if err != nil {
		fmt.Println("err", err)
	}
	hour24H := fmt.Sprint(hour  + 12) + GetFormatWithoutHour(code)

 	return hour24H
 }

func main() {
	INPUT := "07:05:45PM"
	result := To24HoursClock(INPUT)
    fmt.Println("Input: ", INPUT)
    fmt.Println("Result: ", result)

}