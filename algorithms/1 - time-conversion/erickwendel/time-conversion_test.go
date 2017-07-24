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
  assert := assert.New(t)
  result := To24Hours("07:05:45PM")
  assert.Equal(result, "19:05:45")
  
}
