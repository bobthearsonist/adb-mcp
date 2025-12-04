/* MIT License
 *
 * Copyright (c) 2025 Mike Chambers
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const { app } = require("photoshop");  // For app references

const {
    findLayer,
    execute
} = require("./utils");  // For the utility functions used in your code

const applyMotionBlur = async (command) => {

    let options = command.options;
    let layerId = options.layerId;

    let layer = findLayer(layerId);

    if (!layer) {
        throw new Error(
            `applyMotionBlur : Could not find layerId : ${layerId}`
        );
    }

    await execute(async () => {
        await layer.applyMotionBlur(options.angle, options.distance);
    });
};

const applyGaussianBlur = async (command) => {

    let options = command.options;
    let layerId = options.layerId;

    let layer = findLayer(layerId);

    if (!layer) {
        throw new Error(
            `applyGaussianBlur : Could not find layerId : ${layerId}`
        );
    }

    await execute(async () => {
        await layer.applyGaussianBlur(options.radius);
    });
};

const applyHighPass = async (command) => {

    let options = command.options;
    let layerId = options.layerId;

    let layer = findLayer(layerId);

    if (!layer) {
        throw new Error(
            `applyHighPass : Could not find layerId : ${layerId}`
        );
    }

    await execute(async () => {
        await layer.applyHighPass(options.radius);
    });
};

const applySharpen = async (command) => {

    let options = command.options;
    let layerId = options.layerId;

    let layer = findLayer(layerId);

    if (!layer) {
        throw new Error(
            `applySharpen : Could not find layerId : ${layerId}`
        );
    }

    await execute(async () => {
        await layer.applySharpen();
    });
};

const applySharpenMore = async (command) => {

    let options = command.options;
    let layerId = options.layerId;

    let layer = findLayer(layerId);

    if (!layer) {
        throw new Error(
            `applySharpenMore : Could not find layerId : ${layerId}`
        );
    }

    await execute(async () => {
        await layer.applySharpenMore();
    });
};

const applySharpenEdges = async (command) => {

    let options = command.options;
    let layerId = options.layerId;

    let layer = findLayer(layerId);

    if (!layer) {
        throw new Error(
            `applySharpenEdges : Could not find layerId : ${layerId}`
        );
    }

    await execute(async () => {
        await layer.applySharpenEdges();
    });
};

const applyUnSharpMask = async (command) => {

    let options = command.options;
    let layerId = options.layerId;

    let layer = findLayer(layerId);

    if (!layer) {
        throw new Error(
            `applyUnSharpMask : Could not find layerId : ${layerId}`
        );
    }

    await execute(async () => {
        await layer.applyUnSharpMask(options.amount, options.radius, options.threshold);
    });
};

const applyLensBlur = async (command) => {

    let options = command.options;
    let layerId = options.layerId;

    let layer = findLayer(layerId);

    if (!layer) {
        throw new Error(
            `applyLensBlur : Could not find layerId : ${layerId}`
        );
    }

    await execute(async () => {
        await layer.applyLensBlur(
            options.source,
            options.focalDistance,
            options.invertDepthMap,
            options.shape,
            options.radius,
            options.bladeCurvature,
            options.rotation,
            options.brightness,
            options.threshold,
            options.amount,
            options.distribution,
            options.monochromatic
        );
    });
};

const applyAddNoise = async (command) => {

    let options = command.options;
    let layerId = options.layerId;

    let layer = findLayer(layerId);

    if (!layer) {
        throw new Error(
            `applyAddNoise : Could not find layerId : ${layerId}`
        );
    }

    await execute(async () => {
        await layer.applyAddNoise(options.amount, options.distribution, options.monochromatic);
    });
};

const applyDustAndScratches = async (command) => {

    let options = command.options;
    let layerId = options.layerId;

    let layer = findLayer(layerId);

    if (!layer) {
        throw new Error(
            `applyDustAndScratches : Could not find layerId : ${layerId}`
        );
    }

    await execute(async () => {
        await layer.applyDustAndScratches(options.radius, options.threshold);
    });
};

const commandHandlers = {
    applyMotionBlur,
    applyGaussianBlur,
    applyHighPass,
    applySharpen,
    applySharpenMore,
    applySharpenEdges,
    applyUnSharpMask,
    applyLensBlur,
    applyAddNoise,
    applyDustAndScratches,
};

module.exports = {
    commandHandlers
};