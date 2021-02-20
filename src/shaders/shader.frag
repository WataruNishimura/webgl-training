#pragma glslify: random = require("glsl-random")

precision mediump float;
uniform vec2 uResolutionVector;

void main(void) {
  gl_FragColor = vec4(vec3(random(gl_FragCoord.xy / uResolutionVector.xy )), 1.0);
}