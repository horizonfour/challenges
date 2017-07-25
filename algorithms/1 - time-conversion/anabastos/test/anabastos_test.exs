defmodule AnabastosTest do
  use ExUnit.Case
  doctest Solution

  test "test 07:05:45PM" do
    assert Solution.handler("07:05:45PM") == "19:05:45"
  end
end
