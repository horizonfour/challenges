//Tentativa rust

// use std::io;

// fn read_line() -> String {
//     let mut s = String::new();
//     io::stdin().read_line(&mut s);
//     s.trim_right().to_string()
// }

// fn make_vector() -> Vec<i32> {
//   let n_lines = read_line().parse::<usize>().unwrap();
//   println!("{:?}", n_lines);
//   let mut v = vec![0; 10];
//   for x in 0..n_lines {
//     println!("aa");    
//     let line = read_line().parse::<i32>().unwrap();
//     v[x] = line;
//     println!("{:?}", v[x]);   
//   }
//   v
// }

// fn main() {
//   let vector = make_vector();
//   //println!("{:?}", vector);
// }

/////////////////aaaa

use std::io;
use num;
use std::io::prelude::*;

fn main() {
    let reader = io::stdin();
    let mut lines = reader.lock().lines();

    macro_rules! parse {
        ($x:expr) => ($x.unwrap().trim().parse::<usize>().unwrap())
    }
    
    macro_rules! parseVal {
        ($x:expr) => ($x.unwrap().trim().parse::<BigInt>().unwrap())
    }

    let n = parse!(lines.next().unwrap());
    for line in lines.take(n) {
        println!("{:?}", parseVal!(line));
    }
}
