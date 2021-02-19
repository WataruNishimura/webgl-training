void main(void) {
  gl_FragColor = vec4(gl_FragCoord.x, gl_FragCoord.y / 512.0, 0.0, 1.0);
}