package main

import (
	"testing"
  // "fmt"
  "github.com/stretchr/testify/assert"
)
func TestMidnightFormat(t *testing.T) {
  assert := assert.New(t)
  result := MidnightFormat("12:05:45AM")
  assert.Equal(result, "00:05:45")
  
}
func TestNotMidnightFormat(t *testing.T) {
  assert := assert.New(t)
  result := MidnightFormat("04:05:45AM")
  assert.Equal(result, "04:05:45AM")
  
}
func TestFormatoAmPara24Horas (t *testing.T) {
  // assert := assert.New(t)
  // result := To24Hours("07:05:45PM")
  // assert.Equal(result, "19:05:45")
  
}
// func TestGenerateQRCodeReturnsValue(t *testing.T) {
// 	result := GenerateQRCode("555-2368")
//   fmt.Println(result)
//   assert := assert.New(t)
//   assert.Equal(result, "ae1")
// 	// if result == nil {
// 	// 	t.Errorf("Generated QRCode is nil")
// 	// }
// 	// if len(result) == 0 {
// 	// 	t.Errorf("Generated QRCode has no data")
// 	// }
// }