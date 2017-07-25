defmodule Solution do
  def handler(line) do
    if (String.slice(line, 8, 10) == "AM"), do: String.slice(line, 0, 8), else: Solution.changeHour(String.slice(line, 0, 8))
  end
  def changeHour(hour) do
      Integer.to_string(String.to_integer(String.slice(hour, 0, 2)) + 12) <> String.slice(hour, 2, 8)
  end
end

# Para testar no hackerrank descomente essas duas linhas abaixo
# x = IO.gets ""
# IO.puts(Solution.handler(x))